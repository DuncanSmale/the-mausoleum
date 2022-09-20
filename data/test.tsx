type session = {
  id: string;
  factors: string[];
  values: string[];
};

type activity = {
  id: string;
  sessions: session[];
};

const tempData: activity[] = [
  {
    id: "a1",
    sessions: [
      {
        id: "s1",
        factors: ["sets", "reps"],
        values: ["8", "10"],
      },
    ],
  },
];

export default tempData;
