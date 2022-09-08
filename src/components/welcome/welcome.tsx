type WelcomeProps = {
  name?: string;
};

export const Welcome = ({ name }: WelcomeProps) => {
  return <div>Hello {name}</div>;
};
