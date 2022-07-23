package babel.backend.repository;

import babel.backend.model.FullContainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FullContainerRepository extends JpaRepository<FullContainer, Long> {
}
