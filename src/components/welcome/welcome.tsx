import { WelcomeProps } from "./welcome.types";

export const Welcome = ({ name }: WelcomeProps) => {
  return <div>Hello {name}</div>;
};
