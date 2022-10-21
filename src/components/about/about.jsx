import s from './about.module.css'

export default function About() {
    return (
        <div className={s.aboutContainer}>
            <h2>About</h2>
            <span>Project developed as part of an internship in a web development bootcamp.</span>
            <br></br>
            <span>Technologies used:</span>
            <ul>
                <li>HTML5</li>
                <li>CSS6</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Redux</li>
            </ul>
        </div>
    )
}