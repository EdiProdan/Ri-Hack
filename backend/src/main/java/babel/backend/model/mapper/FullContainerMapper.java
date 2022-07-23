package babel.backend.model.mapper;

import babel.backend.model.FullContainer;
import babel.backend.model.dto.FullContainerDTO;
import babel.backend.service.FullContainerService;

public class FullContainerMapper {
    public static FullContainer fromDto(FullContainerDTO dto){
        FullContainer fullContainer = new FullContainer();
        fullContainer.setId(dto.getId());
        fullContainer.setTimeAdded(dto.getTimeAdded());
        return fullContainer;
    }

    public static FullContainerDTO toDto(FullContainer fullContainer){
        FullContainerDTO dto = new FullContainerDTO();
        dto.setContainerId(fullContainer.getContainer().getId());
        dto.setId(fullContainer.getId());
        dto.setTimeAdded(fullContainer.getTimeAdded());
        return dto;
    }
}
