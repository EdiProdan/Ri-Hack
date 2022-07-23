package babel.backend.controller;

import babel.backend.model.FullContainer;
import babel.backend.model.dto.FullContainerDTO;
import babel.backend.service.FullContainerService;
import liquibase.pro.packaged.R;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/full-containers")
public class FullContainerController {
    private final FullContainerService fullContainerService;

    public FullContainerController(FullContainerService fullContainerService) {
        this.fullContainerService = fullContainerService;
    }

    @PostMapping
    public FullContainerDTO addFullContainer(@Valid @RequestBody FullContainerDTO dto){
        return fullContainerService.addFullContainer(dto);
    }

}
