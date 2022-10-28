import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const styles = {
        display: 'flex',
        justifyContent: 'center'
    };

  return (
      <div>
          <div style={styles}>
              <Link to='/part1'>
                  <button>Part 1</button>
                  <br /><br />
              </Link>
        </div>
          <div style={styles}>
              <Link to='/part2'>
                  <button>Part 2</button>
                  <br /><br />
              </Link>
        </div>
        
    </div>
  )
}

export default Home