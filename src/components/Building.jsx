function Building(props) {
  return (
    <div className="border p-4 m-4 rounded-lg">
      <h2 className="text-2xl font-bold">
        {props.name}
      </h2>

      <p>
        {props.description}
      </p>
    </div>
  );
}

export default Building;