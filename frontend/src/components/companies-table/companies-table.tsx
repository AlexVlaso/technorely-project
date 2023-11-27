import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/hooks';
import { CompaniesTableElement } from '../companies-table-element/companies-table-element';
import { useEffect } from 'react';
import { getAllCompanies } from '../../slices/company/actions';

const CompaniesTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { companies } = useAppSelector((state) => state.companies);

  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.row}>
            <th>
              <FontAwesomeIcon icon={faListOl} />
            </th>
            <th>Name</th>
            <th>Address</th>
            <th>Service of activity</th>
            <th>Employees</th>
            <th>Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {companies.map((company, index) => (
            <CompaniesTableElement
              company={company}
              index={index + 1}
              key={company.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { CompaniesTable };
