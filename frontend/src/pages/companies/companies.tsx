import { CompaniesTable } from '../../components/companies-table/companies-table';
import { Header } from '../../components/header/header';

const Companies: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <CompaniesTable />
      </main>
    </div>
  );
};

export { Companies };
