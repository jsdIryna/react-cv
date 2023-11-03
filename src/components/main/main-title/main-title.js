import 'D:/projects/react-cv/src/components/main/main-title/main-title.scss';
import comp from 'D:/projects/react-cv/src/assets/computer.png'

function MainTitle() {
    return (
        <div className="main__title">
            <div className="container">
                <div className="main__title__row">
                    <div className="title__img">
                        <img src={comp} alt='computer' />
                    </div>
                    <div className="title__descr">
                        <h1 className="descr__title">WEB-programming</h1>
                        <div className="descr__body">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aspernatur deleniti sed nisi libero iusto facere non similique expedita sequi,
                            delectus nam ipsum, esse vitae provident!
                        </div>
                        <button className="descr__button">write me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTitle;
