import React from 'react'
import style from './style.module.css'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';
const Sort = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={style.wrapper}>
        <div className={style.container}>
     
        <p className={style.name}>Women</p>
           <div className={style.sort}>
            <p className={style.paragraph}>Sort by</p>
           <FormControl >
 
          <Select className={style.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              
              sx={{maxWidth:200 ,height:40}
          }
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </div>
              </div>
              </div>
            )
          }

export default Sort