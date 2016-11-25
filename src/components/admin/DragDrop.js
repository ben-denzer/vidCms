import React from 'react';
import Dropzone from 'react-dropzone';

class DragDrop extends React.Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.onOpenClick = this.onOpenClick.bind(this);
        this.state = {files: []};
    }
    onDrop(acceptedFiles) {
        this.props.handleUpload(acceptedFiles);
    }
    onOpenClick() {
        this.refs.dropzone.open();
    }
    render() {
        return (
            <div id="dropzone">
                <Dropzone ref="dropzone" onDrop={this.onDrop} >
                    <div>{!this.props.file.length ? 'Drop video here, or click to select files to upload.' : 'Uploaded'}</div>
                </Dropzone>
                <button type="button" onClick={this.onOpenClick}>
                    Open
                </button>
            </div>
        );
    }
}

export default DragDrop;