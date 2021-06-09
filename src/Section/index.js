import "./style.css";

const Section = ({ title, extraHeaderContent }) => (
    <section className="section">
        <div className="section__body">
            <h2 className="section__header">{title}</h2>
            {extraHeaderContent}
        </div>
    </section>
);

export default Section;