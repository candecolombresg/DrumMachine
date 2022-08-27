import '../stylesheets/Drumpad.css';

function Drumpad(props) {

  return (
    <div className='col'>
        <button 
          id={props.id}
          className= 'drum-pad btn btn-lg'
          value= {props.children}
          onClick = {() => props.handleClick(props.children, props.id)}>
            {props.children}
            <audio id={props.children} className='clip' preload='auto' src= {props.src} />
        </button>
    </div>
  )
}

export default Drumpad;