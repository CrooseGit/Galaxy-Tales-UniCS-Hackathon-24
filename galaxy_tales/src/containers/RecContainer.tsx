interface Props {
  title?: string;
  content?: string;
}

const RecContainer = ({ title, content }: Props) => {
  if (title == null || title == '') {
    title = 'This is a sample title';
  }
  if (content == null || content == '') {
    content =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quaerat ex. Maiores, esse, libero itaque iure ab magnam laboriosam aut adipisci perferendis quisquam quod qui tempore perspiciatis consequatur impedit praesentium!';
  }
  return (
    <div className='reccontainer rounded mt-3 p-2'>
      <h2>{title}</h2>
      <p>
        {content.substring(0, content.length < 200 ? content.length - 1 : 199) +
          '...'}
      </p>
    </div>
  );
};

export default RecContainer;
