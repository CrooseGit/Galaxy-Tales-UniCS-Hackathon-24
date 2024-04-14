interface Props {
  title: string;
  content: string;
  id: number;
  simple_type: string;
  onClick: (id: number) => void;
}

const RecContainer = ({ title, content, simple_type, id, onClick }: Props) => {
  return (
    <div
      className={`reccontainer rounded mt-3 p-2 ${simple_type}`}
      onClick={() => {
        onClick(id);
      }}
    >
      <h2>{title}</h2>
      <p>
        {content.substring(0, content.length < 200 ? content.length - 1 : 199) +
          '...'}
      </p>
    </div>
  );
};

export default RecContainer;
