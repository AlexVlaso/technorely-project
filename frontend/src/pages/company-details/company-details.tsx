import { CompanyView } from '../../components/company-view/company-view';

import { BackButton } from '../../components/back-button/back-button';

const CompanyDetails: React.FC = () => {
  return (
    <main>
      <BackButton />
      <CompanyView />
    </main>
  );
};

export { CompanyDetails };
