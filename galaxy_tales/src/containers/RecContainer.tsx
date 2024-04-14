interface Props {
  title?: string;
  content?: string;
  id?: number;
  simple_type?: string;
  onClick: (id: number, simple_type: string) => void;
}

const RecContainer = ({ title, content, id, onClick }: Props) => {
  id = id ? id : -1;
  title = title ? title : 'Place holder title';
  content = content
    ? content
    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quaerat ex. Maiores, esse, libero itaque iure ab magnam laboriosam aut adipisci perferendis quisquam quod qui tempore perspiciatis consequatur impedit praesentium!';

  return (
    <div
      className='reccontainer rounded mt-3 p-2'
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
