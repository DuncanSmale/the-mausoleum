import testData from "../../../data/test";
import AcivityDetails from "../../../components/Activity/ActivityDetails";

const ActivityDetailsPage = (props) => {
  return (
    <div>
      <h1 className="text-4xl bg-gradient-to-r from-red to-pink bg-clip-text text-transparent font-extrabold inline-block">
        {props.id}
      </h1>
      <AcivityDetails id={props.id} sessions={props.sessions} />
    </div>
  );
};

// TODO: change this to use data stored in the SQLite database
export function getStaticPaths() {
  const activityPages = testData;
  return {
    fallback: "blocking",
    paths: activityPages.map((item) => ({
      params: {
        activityId: item.id,
      },
    })),
  };
}

export function getStaticProps(context: any) {
  const activity = testData.filter(
    (item) => item.id === context.params.activityId
  )[0];
  return {
    props: {
      id: activity.id,
      sessions: activity.sessions,
    },
  };
}

export default ActivityDetailsPage;
