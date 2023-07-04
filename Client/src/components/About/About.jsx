import style from './About.module.css'

const About = () => {
    return(

        <div className={style.aboutContainer}>
            <h2 className={style.texto}>Mis datos: </h2>
            <p className={style.texto}>Detalles del creador</p>
        </div>
        
    )
}

export default About;