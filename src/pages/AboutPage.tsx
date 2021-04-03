import React from 'react'
import { useHistory } from 'react-router'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h3>Info page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptas
        provident temporibus, doloremque rem molestiae a itaque est eius tempore
        hic velit voluptatibus suscipit nulla.
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Back to Todos
      </button>
    </>
  )
}
