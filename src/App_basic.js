function App() {
  return (
    <div>
      <div className='max-w-[1080px] mx-auto bg-slate-300 p-4'>
        <h1 type='primary'>App Remote (Webpack 5 / React 18)</h1>
        <p className='mb-6 mt-4'>{process.env.DEV_ENV} # Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper enim in commodo pretium. Praesent aliquam, dolor eget sodales ultrices, elit nunc ullamcorper velit, ac mattis nulla dui at leo. In ac dolor a tortor consectetur scelerisque vel at nunc. In porttitor at nibh sit amet feugiat. Cras sit amet nulla id nisl blandit tempus.</p>

        <div title='Crear Póliza'>
          <form>
            <div className='flex gap-x-4 mb-4'>
              <div className="flex-1">
                Input
              </div>
              <div className="flex-1">
                Select
              </div>
            </div>

            <div className='flex justify-end'>
              <button onClick={() => null}>Guardar</button>
            </div>
          </form>
        </div>   
      </div>
    </div>
  );
}

export default App;