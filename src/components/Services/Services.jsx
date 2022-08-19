import "./Services.css";

// Components
import ListItem from "./ListItem";

const data = [];

for (let i = 0; i < 7; i++) {
  data[i] = {
    id: i,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  };
}

console.log();

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            {data.map((li) => (
              <ListItem key={li.id} text={li.text} />
            ))}
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            {data.map((li) => (
              <ListItem key={li.id} text={li.text} />
            ))}
          </ul>
        </article>
        {/* End Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            {data.map((li) => (
              <ListItem key={li.id} text={li.text} />
            ))}
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  );
};

export default Services;
