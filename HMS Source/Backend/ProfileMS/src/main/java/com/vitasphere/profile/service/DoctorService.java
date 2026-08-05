package com.vitasphere.profile.service;

import java.util.List;

import com.vitasphere.profile.dto.DoctorDTO;
import com.vitasphere.profile.dto.DoctorDropdown;
import com.vitasphere.profile.exception.HmsException;

public interface DoctorService {
    public Long addDoctor(DoctorDTO doctorDTO) throws HmsException;

    public DoctorDTO getDoctorById(Long id) throws HmsException;

    public DoctorDTO updateDoctor(DoctorDTO doctorDTO) throws HmsException;

    public Boolean doctorExists(Long id) throws HmsException;

    public List<DoctorDropdown> getDoctorDropdowns() throws HmsException;

    public List<DoctorDTO> getAllDoctors() throws HmsException;

    public List<DoctorDropdown> getDoctorsById(List<Long> ids) throws HmsException;
}
