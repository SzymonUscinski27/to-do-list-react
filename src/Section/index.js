import "./style.css";

const Section = ({ title, extraSectionContent, extraHeaderContent }) => (
    <section className="section">
        <header className="section__header">
            <h2>{title}</h2>
            {extraHeaderContent}
        </header>
        <div className="section__body">
            {extraSectionContent}
        </div>
    </section>
);

export default Section;