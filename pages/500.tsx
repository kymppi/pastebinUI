import { Error } from '../components/Error/Error';
import { HeaderMenu } from '../components/Header/HeaderMenu';

export default function Custom500() {
  const links = [
    { link: '/', label: 'Koti - Luo liite' },
    { link: '/browse', label: 'Selaa liitteitä' },
    { link: '/info', label: 'Tietoa meistä' },
  ];

  return (
    <>
      <HeaderMenu links={links} />
      <Error
        errorCode={500}
        errorTitle="Palvelinvirhe"
        errorText="Palvelimelta tuli virheellinen vastaus"
      />
    </>
  );
}
