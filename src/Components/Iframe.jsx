import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles((theme) => ({ 
    div: {
        paddingTop: '10px',
        marginBottom: '-200px',
    },     
    PDF: {
        width: '100%',
        height: '50%',
        alignItems: 'center'
    }
  }));

const ExamplePDFViewer = (props) => {
    var styles = useStyles()
    
    const { src } = props;

    return (
        <div className={styles.div}>
            <PDFViewer
                navbarOnTop='true'
                document={{
                    url: src
                }}
                loader={<LinearProgress/>}
                css={styles.PDF}
            />
        </div>
    )
}

export default ExamplePDFViewer;