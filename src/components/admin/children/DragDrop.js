import React    from 'react';
import Dropzone from 'react-dropzone';
import styled   from 'styled-components';

class DragDrop extends React.Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.onOpenClick = this.onOpenClick.bind(this);
    }
    onDrop(acceptedFiles) {
        this.props.handleFileUpload(acceptedFiles);
    }
    onOpenClick() {
        this.refs.dropzone.open();
    }
    render() {
        const {inputFile} = this.props;
        return (
            <div id="dropzone">
                <Dropzone ref="dropzone" onDrop={this.onDrop} >
                    <div>
                        {
                            !inputFile.length ? 
                                'Drop file here, or click to select files to upload.' :
                                <Preview src={inputFile[0].preview || inputFile[0][0].name} />
                        }</div>
                </Dropzone>
                <button type="button" onClick={this.onOpenClick}>
                    Open
                </button>
            </div>
        );
    }
}

const Preview = styled.img`
    max-width: 150px;
    height: auto;
`;

export default DragDrop;