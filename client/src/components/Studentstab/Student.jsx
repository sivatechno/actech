import React ,{ useState}from 'react'
import './Table.scss'
import MaterialTable from 'material-table';
import { Avatar,Grid } from '@material-ui/core';

const Student =()=> {
    const empList =[
        {name:'Naresh', accesslevel:1,ContactNumber: 876543 , EmailAddress:'naresh@gmail.com'},
        {name:'Siva',accesslevel:1, ContactNumber: 9876543,EmailAddress:'naresh@gmail.com'},
        {name:'Guna',accesslevel:0, ContactNumber: 9876543,EmailAddress:'naresh@gmail.com'},
        {name:'Manoj',accesslevel:1, ContactNumber: 9876543,EmailAddress:'naresh@gmail.com'},
        {name:'Raj', accesslevel:0,ContactNumber: 9876543,EmailAddress:'naresh@gmail.com'},
    ]
    
     const[data, setData] = useState(empList)
      const columns=[
    
    { title:"Name", field:"name", render:(row)=><Grid container alignItems="center">
        <Grid items sm={3}>
        <Avatar style={{backgroundColor:"green"}}>{row.name[0]}</Avatar>
        </Grid>
        <Grid items>
        {row.name}
        </Grid>
        </Grid>
        }, 
    {title:"Email Address", field:"EmailAddress"},
    {title:"Access Level", field:"accesslevel" ,render:(row)=><div className={row.accesslevel ? "active": "deactive"}>{row.accesslevel ? "Active": "Deactive"}</div>},
    {title:"Contact Number", field:"ContactNumber"},
    
]

    return (
        <div className="tab-container">
           <MaterialTable title="View Student" 
           data={data}
          columns={columns}
          editable={{
            onRowAdd: (newRow) => new Promise((resolve, reject) => {
              const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
              setTimeout(() => {
                setData(updatedRows)
                resolve()
              }, 2000)
            }),
            onRowDelete: selectedRow => new Promise((resolve, reject) => {
              const index = selectedRow.tableData.id;
              const updatedRows = [...data]
              updatedRows.splice(index, 1)
              setTimeout(() => {
                setData(updatedRows)
                resolve()
              }, 2000)
            }),
            onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
              const index=oldRow.tableData.id;
              const updatedRows=[...data]
              updatedRows[index]=updatedRow
              setTimeout(() => {
                setData(updatedRows)
                resolve()
              }, 2000)
            })
  
          }}
          options={{
            search:true,
            paging:true,
            filtering:false,
            actionsColumnIndex: -1, addRowPosition: "first"
          }}
        
           
           />
        </div>
    )
}

export default Student;
