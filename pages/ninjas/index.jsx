import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ninjas}) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {/* {
            ninjas.map( ninja => (
                <div key={ninja.id}>
                <a>
                <h3>{ninja.name}</h3>
                </a>
                </div>
                ))
            } */}
          
      {ninjas.map((ninja, i) => (
        <Link href={'/ninjas/' + ninja.id } key={i}>
          <a className={ styles.single }>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
