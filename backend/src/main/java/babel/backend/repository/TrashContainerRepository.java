package babel.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import babel.backend.model.TrashContainer;
import org.springframework.stereotype.Repository;

@Repository
public interface TrashContainerRepository extends JpaRepository<TrashContainer, Long> {
}
