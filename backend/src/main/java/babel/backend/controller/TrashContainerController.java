package babel.backend.controller;

import babel.backend.model.TrashContainer;
import babel.backend.service.TrashContainerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/trash-containers")
public class TrashContainerController {
    private final TrashContainerService trashContainerService;


    public TrashContainerController(TrashContainerService trashContainerService) {
        this.trashContainerService = trashContainerService;
    }

    @GetMapping
    public List<TrashContainer> getAllTrashContainers(){
        return trashContainerService.getAllTrashContainers();
    }


}
