import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  MaterialTable: {
    opacity: 0.2
  }
});

export default function PacketTable() {
  
  var styles = useStyles();

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Price', field: 'price', type: 'numeric' },      
      { title: 'Duration', field: 'duration' },
      { title: 'Description', field: 'description' },
      { title: 'Content',  field: 'content' },
      { title: 'Image', field: 'image' },
    ],
    data: [
      { name: 'UG - IPN', 
        price: 3500, 
        duration: '4 meses', 
        description: 'Curso propedéutico para examen de admisión',
        content: '',
        image: ''
      },
      { name: 'UNAM', 
        price: 3000, 
        duration: '3 meses', 
        description: 'Curso propedéutico para examen de admisión',
        content: '',
        image: ''
      },
      { name: 'ITL - UTL', 
        price: 2800, 
        duration: '4 meses', 
        description: 'Curso propedéutico para examen de admisión',
        content: '',
        image: ''
      },
    ],
  });

  return (
    <MaterialTable
      className={styles.MaterialTable}
      title="Paquetes"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
