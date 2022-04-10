import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import './RocketMission.css';
import RocketMissionDetails from './RocketMissionDetails';
import ReactPaginate from 'react-paginate';


const RocketMission = () => {
  const [value, setValue] = useState(new Date());
  const [missions, setMissions] = useState([]);
 
  //pagination
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(8);
  const [pageCount, setPageCount] = useState(0);

  //space data url
  const url = 'https://api.spacexdata.com/v3/launches';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMissions(data));
  }, []);

  //pagination
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPageCount(Math.ceil(data.length / perPage));
      setMissions(data.slice(offset, offset + perPage));
    };

    fetchData();
  }, [offset]);
  const handlePageClick = (e) => {
    const selectedPage = e.selected;

    setOffset((selectedPage + 1) * perPage);
  };

  
  return (
    <div className='rocketMission-bg pt-5'>
      <div className='container pt-5'>
        <nav className='navbar '>
          <div className='container-fluid '>
            <div className='lunch-nav'>
              <ul className='d-flex mt-2'>
                <li className='mt-4 mx-5'>Is Upcoming?</li>
                <li class='nav-item dropdown mt-3 '>
                  <p
                    class='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdownMenuLink'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                    className='text-grayLight pt-2'
                  >
                    Yes <span style={{ marginLeft: '2px' }}>^</span>
                  </p>
                  <ul class='dropdown-menu'>
                    <li>
                      <p class='dropdown-item'>No</p>
                    </li>
                  </ul>
                </li>

                <li className='mt-4 mx-5 launch-rocket'>Launch Year?</li>
                <li className='mt-3 yearPicker'>
                  {/* YEAR PICKER */}
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DatePicker
                        views={['year']}
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} helperText={null} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </li>
              </ul>
            </div>

            <form className='d-flex'>
              <input
                className='form-control me-2 w-75  search-input '
                type='search'
                placeholder='Search for Rocket'
                aria-label='Search'
              />
              <button className='search-button' type='submit'>
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className='row'>
          {missions.map((mission, id) => (
            <RocketMissionDetails mission={mission} key={id} />
          ))}
        </div>
        <div className='row  pagination'>
          <ReactPaginate
            previousLabel={'>'}
            nextLabel={'<'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
          />
        </div>
      </div>
    </div>
  );
};

export default RocketMission;
