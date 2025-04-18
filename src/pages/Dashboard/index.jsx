import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MovingIcon from '@mui/icons-material/Moving';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Chart } from "react-google-charts";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Dashboard = () => {


  const [shownby, setshowBy] = useState('');


  const data = [
    ["Jan", "Hours per Day"],
    ["Jan", 9],
    ["Feb", 9],
    ["March", 8],

  ];
  const options = {
    titleTextStyle: { color: "white" },
    title: "Recemt Profit Stats",
    backgroundColor: "transparent",
    chartArea: { 'width': '100%', 'height': '80%' }
  };



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>

      {/* Start sesction 1 */}
      <section className='userTileSection'>
        <div className="container-fluid gx-0">
          <div className="row">
            <div className=" col-sm-12 col-md-8">
              <div className="userTileContainer d-flex flex-wrap gap-2 justify-content-between">
                <Button className="tile tile-green d-block">
                  <div className="d-flex justify-content-between">
                    <div className="col1">
                      <h6 className='m-0'>Total Users</h6>
                      <span>277</span>
                    </div>
                    <div className="iconContainer">
                      <span><AccountCircleIcon /></span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className='lastMonth'>Last Month</span>
                    <div className="icon-container">
                      <Button >
                        <MoreVertIcon onClick={handleClick} />
                        <Menu
                          id="fade-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Last Day</MenuItem>
                          <MenuItem onClick={handleClose}>Last Week</MenuItem>
                          <MenuItem onClick={handleClose}>Last Month</MenuItem>
                        </Menu>
                      </Button>
                    </div>
                  </div>
                  <div className="movingIconContainer">
                    <MovingIcon />
                  </div>

                </Button>

                <Button className="tile tile-pink d-block">
                  <div className="d-flex justify-content-between">
                    <div className="col1">
                      <h6 className='m-0'>Total Users</h6>
                      <span>277</span>
                    </div>
                    <div className="iconContainer">
                      <span><AccountCircleIcon /></span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className='lastMonth'>Last Month</span>
                    <div className="icon-container">
                      <Button >
                        <MoreVertIcon onClick={handleClick} />
                        <Menu
                          id="fade-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Last Day</MenuItem>
                          <MenuItem onClick={handleClose}>Last Week</MenuItem>
                          <MenuItem onClick={handleClose}>Last Month</MenuItem>
                        </Menu>
                      </Button>
                    </div>
                  </div>
                  <div className="movingIconContainer">
                    <MovingIcon />
                  </div>

                </Button>

                <Button className="tile tile-blue d-block">
                  <div className="d-flex justify-content-between">
                    <div className="col1">
                      <h6 className='m-0'>Total Users</h6>
                      <span>277</span>
                    </div>
                    <div className="iconContainer">
                      <span><AccountCircleIcon /></span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className='lastMonth'>Last Month</span>
                    <div className="icon-container">
                      <Button >
                        <MoreVertIcon onClick={handleClick} />
                        <Menu
                          id="fade-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Last Day</MenuItem>
                          <MenuItem onClick={handleClose}>Last Week</MenuItem>
                          <MenuItem onClick={handleClose}>Last Month</MenuItem>
                        </Menu>
                      </Button>
                    </div>
                  </div>
                  <div className="movingIconContainer">
                    <MovingIcon />
                  </div>

                </Button>

                <Button className="tile tile-orange d-block">
                  <div className="d-flex justify-content-between">
                    <div className="col1">
                      <h6 className='m-0'>Total Users</h6>
                      <span>277</span>
                    </div>
                    <div className="iconContainer">
                      <span><AccountCircleIcon /></span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className='lastMonth'>Last Month</span>
                    <div className="icon-container">
                      <Button >
                        <MoreVertIcon onClick={handleClick} />
                        <Menu
                          id="fade-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>Last Day</MenuItem>
                          <MenuItem onClick={handleClose}>Last Week</MenuItem>
                          <MenuItem onClick={handleClose}>Last Month</MenuItem>
                        </Menu>
                      </Button>
                    </div>
                  </div>
                  <div className="movingIconContainer">
                    <MovingIcon />
                  </div>

                </Button>

              </div>
            </div>
            <div className="col-md-4">
              <div className="graphBox">
                <div className="d-flex justify-content-between">
                  <span className='lastMonth'>Total Sales</span>
                  <div className="icon-container">
                    <Button >
                      <MoreVertIcon onClick={handleClick} />
                      <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose}>Last Day</MenuItem>
                        <MenuItem onClick={handleClose}>Last Week</MenuItem>
                        <MenuItem onClick={handleClose}>Last Month</MenuItem>
                      </Menu>
                    </Button>
                  </div>
                </div>
                <p className='totalSales'>$3,787,681.00</p>
                <p className='lastMonthSale'>$3,578.90 in last month</p>

                <div className="chartContainer mt-4">

                  <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"200px"}
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* End sesction 1 */}


      { /* Start Dashbarod section two */}


      <section className='sectionTwo'>
        <div className="card shadow border-0 p-3">
          <h4>Best Selling Products</h4>

          <div className="row mt-3">
            <div className="col-sm-3">
              <h6 className='m-0'>Show By</h6>
              <div className="dropDownContainer mt-3">
                <FormControl size='small' className='w-100'>
                  <Select
                    value={shownby}
                    onChange={(e) => setshowBy(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    labelId="demo-select-small-label"
                    className='select'
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col-sm-3">
              <h6 className='m-0'>Category By</h6>
              <div className="dropDownContainer mt-3">
                <FormControl size='small' className='w-100'>
                  <Select
                    value={shownby}
                    onChange={(e) => setshowBy(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    labelId="demo-select-small-label"
                    className='select'
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>


          <div className="table-responsive mt-3">
            <table className='table table-bordered v-align'>
              <thead className='thead-dark'>
                <tr>
                  <th >UID</th>
                  <th>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>Tops and skirt set for Female...</td>
                  <td>womans</td>
                  <td>@richman</td>
                  <td>richman</td>
                  <td>$21.00</td>
                  <td>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center gap-1">
                      <Button className='secondary' color='secondary'><VisibilityIcon/></Button>
                      <Button className='success' color='success'><EditIcon/></Button>
                      <Button className='error' color='error'><DeleteIcon/></Button>
                    </div>
                  </td>
           
                </tr>
               
              </tbody>
            </table>

          </div>







        </div>
      </section >



      { /* End Dashbarod section two */}

    </>
  )
}

export default Dashboard  