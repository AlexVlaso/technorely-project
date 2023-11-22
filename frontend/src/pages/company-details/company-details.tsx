import { CompanyView } from '../../components/company-view/company-view';
import { Header } from '../../components/header/header';
import { BackButton } from '../../components/back-button/back-button';

const CompanyDetails: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <BackButton />
        <CompanyView />
      </main>
    </div>
  );
};

export { CompanyDetails };
