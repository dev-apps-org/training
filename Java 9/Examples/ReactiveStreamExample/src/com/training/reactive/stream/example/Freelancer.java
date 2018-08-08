package com.training.reactive.stream.example;

public class Freelancer {

	private String id;

	private String name;

	private String skill;

	public Freelancer(String id, String name, String skill) {
		super();
		this.id = id;
		this.name = name;
		this.skill = skill;
	}

	public String getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getSkill() {
		return skill;
	}

	@Override
	public String toString() {
		return "Freelancer [id=" + id + ", name=" + name + ", skill=" + skill + "]";
	}
}