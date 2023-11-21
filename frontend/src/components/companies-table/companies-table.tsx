import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';
import { faListOl } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CompaniesTable: React.FC = () => {
  const navigate = useNavigate();
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
            <th>Number of employees</th>
            <th>Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr className={styles.row}>
            <td>1</td>
            <td>Intelias</td>
            <td>Kharkiv st Sumskaya 43</td>
            <td>Car washing</td>
            <td>34</td>
            <td>Private business</td>
            <td>
              <button
                className={styles.btn}
                onClick={() => {
                  navigate('/companies/1');
                }}
              >
                Details
              </button>
            </td>
          </tr>
          <tr className={styles.row}>
            <td>2</td>
            <td>Intelias</td>
            <td>Kharkiv st Sumskaya 43</td>
            <td>Car washing</td>
            <td>34</td>
            <td>Private business</td>
            <td>
              <button className={styles.btn}>Details</button>
            </td>
          </tr>
          <tr className={styles.row}>
            <td>3</td>
            <td>Intelias</td>
            <td>Kharkiv st Sumskaya 43</td>
            <td>Car washing</td>
            <td>34</td>
            <td>Private business</td>
            <td>
              <button className={styles.btn}>Details</button>
            </td>
          </tr>
          <tr className={styles.row}>
            <td>4</td>
            <td>Intelias</td>
            <td>Kharkiv st Sumskaya 43</td>
            <td>Car washing</td>
            <td>34</td>
            <td>Private business</td>
            <td>
              <button className={styles.btn}>Details</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { CompaniesTable };
