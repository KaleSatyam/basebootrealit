package com.realnet.comm.response;

import java.util.List;


import com.realnet.comm.entity.MultifieldForm;
import com.realnet.fnd.response.PageResponse;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class MultifieldResponse extends PageResponse {

	 @ApiModelProperty(required = true, value = "")
	    private List<MultifieldForm> multifield;
}
