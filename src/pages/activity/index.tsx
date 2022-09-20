import tempData from "../../data/test";

const ActivityPage = (props) => {
  return (
    <div>
      <h1 className="text-4xl bg-gradient-to-r from-red to-pink bg-clip-text text-transparent font-extrabold inline-block">
        Activity Overview
      </h1>
      <div>
        <ul>
          {props.activites.map((item) => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export function getStaticProps(context) {
  const activites = [...tempData];
  return {
    props: {
      activites,
    },
  };
}

export default ActivityPage;
