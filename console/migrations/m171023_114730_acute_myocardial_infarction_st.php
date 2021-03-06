<?php

use yii\db\Migration;

class m171023_114730_acute_myocardial_infarction_st extends Migration
{
    public function up() {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%acute_myocardial_infarction_st}}', [
            'id' => 'int(11) PRIMARY KEY AUTO_INCREMENT',
            'admission_time_to_hospital' => 'datetime NULL DEFAULT NULL',
            'first_name' => 'varchar(100) NOT NULL',
            'last_name' => 'varchar(100) NOT NULL',
            'patronymic' => 'varchar(100) NOT NULL',
            'birthday' => 'date NULL DEFAULT NULL',
            'gender' => "enum('man','woman','','') NOT NULL",
            'delivered' => 'text NOT NULL',
            'killip_type' => 'varchar(2) NOT NULL',
            'effect_of_thrombolysis' => "enum('no','yes','','') NOT NULL",
            'thrombolysis' => 'text NOT NULL',
            'ecg' => 'text NOT NULL',
            'time_intervals' => 'text NOT NULL',
            'continuing_pain' => "enum('no','yes','','') NOT NULL",
            'increase_segment_st' => "enum('no','yes','','') NOT NULL",
            'thrombaspiration' => "enum('thrombus_not_received','thrombus_received','failed','') NOT NULL",
            'blood_timi_before' => 'varchar(2) NOT NULL',
            'blood_timi_after' => 'varchar(2) NOT NULL',
            'stenosis_diameter_ica_before_chkv' => 'varchar(2) NOT NULL',
            'stenosis_diameter_ica_after_chkv' => 'varchar(2) NOT NULL',
            'additionally' => 'text NOT NULL',
            'type_interventions' => 'text NOT NULL',
            'lka' => 'text NOT NULL',
            'pka' => 'text NOT NULL',
            'lvg' => 'text NOT NULL',
            'lvg_active' => 'varchar(1) NOT NULL',
            'fv' => 'text NOT NULL',
            'cause_of_death' => 'text NOT NULL',
            'operator' => 'text NOT NULL',
            'date_and_time_of_death' => 'datetime NULL DEFAULT NULL',
            'address' => 'text NOT NULL',
            'phone' => 'varchar(25) NOT NULL',
            'cd' => 'text NOT NULL',
            'ad' => 'text NOT NULL',
            'aortic_valve_or_prosthesis' => 'text NOT NULL',
            'mitral_valve_or_prosthesis' => 'text NOT NULL',
            'pulmonary_artery_valve' => 'text NOT NULL',
            'three_leaf_valve' => 'text NOT NULL',
            'aorta' => 'text NOT NULL',
            'left_atrium' => 'text NOT NULL',
            'left_ventricle' => 'text NOT NULL',
            'myocardial_contractility' => 'text NOT NULL',
            'parent_id' => 'int(11)',
            'parent_ids' => 'text NOT NULL',
            'polyclinic' => 'text NOT NULL',
            'general_blood_analysis' => 'text NOT NULL',
            'biochemistry' => 'text NOT NULL',
            'test_substance' => 'text NOT NULL'
        ], $tableOptions);
    }

    public function down() {
        $this->dropTable('acute_myocardial_infarction_st');
    }
}