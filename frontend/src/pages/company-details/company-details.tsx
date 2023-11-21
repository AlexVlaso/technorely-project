import { CompanyView } from '../../components/company-view/company-view';
import { Header } from '../../components/header/header';

const CompanyDetails: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <CompanyView />
      </main>
    </div>
  );
};

export { CompanyDetails };
