import React                            from 'react';
import {connect}                        from 'react-redux';
import {stateToHTML}                    from 'draft-js-export-html';
import InlineStyleControls              from './editor/InlineStyleControls';
import BlockStyleControls               from './editor/BlockStyleControls';
import {styleMap, getBlockStyle}        from './editor/helpers';
import {editorChange, removeClearForms} from '../../../actions/formActions';
import {
    Editor,
    EditorState,
    RichUtils,
    convertFromHTML,
    ContentState
} from 'draft-js';

import '../../../styles/editor.css';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };

        this.focus = () => this.refs.editor.focus();
        this.onChange = (editorState) => {
            if (props.clearForms) this.props.removeClearForms();
            this.setState({ editorState });
            this.props.editorChange(stateToHTML(editorState.getCurrentContent()));
        };

        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.onTab = (e) => this._onTab(e);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }
    componentWillMount() {
        if (this.props.editorHtml) {
            const markup = this.props.editorHtml;
            const blocksFromHTML = convertFromHTML(markup);
            const state = ContentState.createFromBlockArray(blocksFromHTML);
            this.setState({editorState: EditorState.createWithContent(state)});
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.clearForms && nextProps.clearForms) {
            this.setState({editorState: EditorState.createEmpty()});
        }
    };
    _handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    }

    _onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }

    _toggleBlockType(blockType) {
        this.onChange(
            RichUtils.toggleBlockType(
                this.state.editorState,
                blockType
            )
        );
    }

    _toggleInlineStyle(inlineStyle) {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    render() {
        const {editorState} = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }
        return (
            <div className="RichEditor-root">
                <BlockStyleControls
                    editorState={editorState}
                    onToggle={this.toggleBlockType}
                />
                <InlineStyleControls
                    editorState={editorState}
                    onToggle={this.toggleInlineStyle}
                />
                <div className={className} onClick={this.focus}>
                    <Editor
                        blockStyleFn={getBlockStyle}
                        customStyleMap={styleMap}
                        editorState={editorState}
                        handleKeyCommand={this.handleKeyCommand}
                        onChange={this.onChange}
                        onTab={this.onTab}
                        ref="editor"
                        spellCheck={true}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editorHtml: state.forms.editorHtml,
        clearForms: state.forms.clearForms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editorChange: (current) => dispatch(editorChange(current)),
        removeClearForms: () => dispatch(removeClearForms())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyEditor);