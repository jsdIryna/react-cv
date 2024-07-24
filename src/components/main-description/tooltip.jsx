import 'components/main-description/tooltip.scss'

const Tooltip = ({text}) =>
    <div className='tooltip_container'>
    <div className='tooltip_contant'> 
        <span className='tooltip_text'>{text}</span>
    </div>
    </div>
  
export default Tooltip;