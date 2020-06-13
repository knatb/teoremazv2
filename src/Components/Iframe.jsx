import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    div: {
      paddingTop: '10px',
      marginBottom: '-200px',
    },     
    PDF: {
        width: '100px',
        height: '50px',
        alignItems: 'center'
    }
  }));

const ExamplePDFViewer = (props) => {
    var styles = useStyles()
    
    const {
        src
      } = props;

    return (
        <div className={styles.div}>
            <PDFViewer 
                navbarOnTop='true'
                document={{
                    url: src
                }}
            />
        </div>
    )
}

export default ExamplePDFViewer