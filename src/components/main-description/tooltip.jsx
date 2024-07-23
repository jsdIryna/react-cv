import 'components/main-description/tooltip.scss'

const Tooltip = ({text}) =>
    <div className='tooltip_container'> 
        <span className='tooltip_text'>{text}</span>
    </div>
  
export default Tooltip;