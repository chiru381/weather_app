import React from 'react'

const Table = ({ weather }) => {
  return (
    <div>
        {weather.map((list , i) => 
            <table key={i}>
            <thead>
                  <tr >
                    <th colSpan={2} style={{ backgroundColor: 'orange', color: 'black' }}>Date: {list.dt_txt}</th>  
                  </tr>
            </thead>
            <tbody>
              <tr>
              <td colSpan={2}>Temperature: {list.main.temp}°C</td>
              </tr>
              <tr>
                <td>Min</td>
                <td>Max</td>
              </tr>
              <tr>
                <td>{list.main.temp_min}°C</td>
                <td>{list.main.temp_max}°C</td>
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{list.main.pressure}</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{list.main.humidity}</td>
              </tr>
            </tbody>
      </table>
    )}    
    </div>
  )
}

export default Table