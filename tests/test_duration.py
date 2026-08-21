from theodore_director.duration import calculate_h3_frames, nearest_h3_frames


def test_nearest_h3_frames_uses_legal_lattice():
    value = nearest_h3_frames(142)
    assert value == 141
    assert value % 17 == 5


def test_final_output_mode_compensates_context():
    generated, output = calculate_h3_frames(5, is_first=False, context_frames=22)
    assert generated == 141
    assert output == 119


def test_legacy_mode_matches_existing_formula():
    generated, output = calculate_h3_frames(5, is_first=False, duration_mode="legacy_generation_duration")
    assert generated == 124
    assert output == 102

