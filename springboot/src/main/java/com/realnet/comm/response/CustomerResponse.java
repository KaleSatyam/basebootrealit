package com.realnet.comm.response;

import java.util.List;

import com.realnet.comm.entity.Customer;
import com.realnet.fnd.response.PageResponse;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class CustomerResponse extends PageResponse {
  @ApiModelProperty(required = true, value = "")
  private List<Customer> items;
}
