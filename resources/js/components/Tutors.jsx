import '../styles/Tutors.css'

function Tutors(prop) {
  return (
    <div className="tutor-list">
        {
            prop.tutorList.map((item, index) => {
                return (
                    <div className='kartu-tutor' key={index}>
                        <img src={item.image} />
                        <p>{item.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Tutors
