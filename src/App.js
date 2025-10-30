import {
  ButtonCT,
  CardCT,
  FormCT,
  HeadingCT,
  InputCT,
  ProviderCT,
  SelectCT,
} from '@contpaqi/ux-library';

function App() {
  return (
    <ProviderCT>
      <div className='bg-slate-300 p-6'>
        <HeadingCT type='primary'>App Remote (Webpack 5 / React 18)</HeadingCT>
        <p className='mb-6 mt-4'>{process.env.DEV_ENV} # Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper enim in commodo pretium. Praesent aliquam, dolor eget sodales ultrices, elit nunc ullamcorper velit, ac mattis nulla dui at leo. In ac dolor a tortor consectetur scelerisque vel at nunc. In porttitor at nibh sit amet feugiat. Cras sit amet nulla id nisl blandit tempus.</p>

        <CardCT title='Crear Póliza'>
          <FormCT>
            <div className='flex gap-x-4 mb-4'>
              <div className="flex-1">
                <InputCT
                  label='Razón Social'
                  name='campo1'
                  placeholder="Proveedora Nacional SA. de C.V."
                  required={'Este campo es obligatorio'}
                />
              </div>
              <div className="flex-1">
                <SelectCT
                  label='Tipo'
                  name='tipo'
                  data={
                    [
                      { label: 'Nacional', value: 'nacional' },
                      { label: 'Internacional', value: 'Internacional' },
                    ]
                  }
                />
              </div>
            </div>

            <div className='flex justify-end'>
              <ButtonCT onClick={() => null}>Guardar</ButtonCT>
            </div>
          </FormCT>
        </CardCT>   
      </div>
    </ProviderCT>
  );
}

export default App;