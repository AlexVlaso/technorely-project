import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { CompanyT } from '../../lib/types/types';
import { AppRoute } from '../../lib/constants/route.constant';

type Property = {
  company: CompanyT;
  index: number;
};

const CompaniesTableElement: React.FC<Property> = ({ company, index }) => {
  const navigate = useNavigate();
  const { id, name, address, serviceOfActivity, numberOfEmployees, type } =
    company;
  return (
    <tr className={styles.row}>
      <td>{index}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{serviceOfActivity}</td>
      <td>{numberOfEmployees}</td>
      <td>{type}</td>
      <td>
        <button
          className={styles.btn}
          onClick={() => {
            navigate(`${AppRoute.COMPANIES}/${id}`);
          }}
        >
          Details
        </button>
      </td>
    </tr>
  );
};

export { CompaniesTableElement };
