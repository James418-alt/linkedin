// import { clear } from "console";
import { connect } from "mongoose";

export const dbConfig = async () => {
  const url = process.env.LOCAL_URL as string;
  await connect(url).then(() => {
    console.clear();
    console.log("Server up!");
  });
};
